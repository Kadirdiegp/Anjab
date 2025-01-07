import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { collection, query, orderBy, getDocs, doc, updateDoc, Timestamp } from 'firebase/firestore';
import { db } from '../../firebase/config';
import { Booking, BookingStatus } from '../../types/booking';
import { useAuth } from '../../context/AuthContext';

const Container = styled.div`
  min-height: 100vh;
  padding: 6rem 1rem 1rem;
  background: ${props => props.theme.colors.background};
`;

const ContentContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  background: white;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    padding: 2rem;
  }
`;

const Title = styled.h1`
  font-family: ${props => props.theme.fonts.heading};
  font-size: 1.75rem;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 1.5rem;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 2rem;
    text-align: left;
  }
`;

const BookingCard = styled.div`
  background: white;
  border: 1px solid ${props => props.theme.colors.accent};
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);

  @media (min-width: 768px) {
    display: none;
  }
`;

const BookingInfo = styled.div`
  margin-bottom: 1rem;
`;

const InfoLabel = styled.span`
  font-weight: bold;
  color: ${props => props.theme.colors.text};
  display: block;
  margin-bottom: 0.25rem;
`;

const InfoValue = styled.span`
  color: ${props => props.theme.colors.text};
  display: block;
  margin-bottom: 0.75rem;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
  display: none;

  @media (min-width: 768px) {
    display: table;
  }
`;

const Th = styled.th`
  text-align: left;
  padding: 1rem;
  background: ${props => props.theme.colors.background};
  border-bottom: 2px solid ${props => props.theme.colors.accent};
`;

const Td = styled.td`
  padding: 1rem;
  border-bottom: 1px solid ${props => props.theme.colors.accent};
`;

const StatusBadge = styled.span<{ $status: BookingStatus }>`
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.875rem;
  font-weight: 500;
  background: ${props => {
    switch (props.$status) {
      case 'pending':
        return '#FFF3CD';
      case 'confirmed':
        return '#D4EDDA';
      case 'cancelled':
        return '#F8D7DA';
      default:
        return '#E2E8F0';
    }
  }};
  color: ${props => {
    switch (props.$status) {
      case 'pending':
        return '#856404';
      case 'confirmed':
        return '#155724';
      case 'cancelled':
        return '#721C24';
      default:
        return '#2D3748';
    }
  }};
`;

const ActionButton = styled.button<{ $variant: 'confirm' | 'cancel' }>`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  transition: all 0.2s ease;
  background: ${props => props.$variant === 'confirm' ? '#28A745' : '#DC3545'};
  color: white;
  width: 100%;

  @media (min-width: 768px) {
    width: auto;
    margin-bottom: 0;
  }

  &:hover {
    opacity: 0.9;
    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const LoadingSpinner = styled.div`
  display: inline-block;
  width: 1rem;
  height: 1rem;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: white;
  animation: spin 1s ease-in-out infinite;
  margin-right: 0.5rem;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 2rem;
  color: ${props => props.theme.colors.text};
`;

const AdminDashboard: React.FC = () => {
  const { currentUser } = useAuth();
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [updatingBookingId, setUpdatingBookingId] = useState<string | null>(null);

  useEffect(() => {
    if (!currentUser) return;
    fetchBookings();
  }, [currentUser]);

  const fetchBookings = async () => {
    try {
      setLoading(true);
      const bookingsRef = collection(db, 'bookings');
      const q = query(bookingsRef, orderBy('date', 'desc'));
      const querySnapshot = await getDocs(q);
      
      const fetchedBookings: Booking[] = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        
        let bookingDate: Timestamp;
        if (typeof data.date === 'string') {
          const [year, month, day] = data.date.split('-').map(Number);
          const date = new Date(year, month - 1, day);
          bookingDate = Timestamp.fromDate(date);
        } else if (data.date && typeof data.date === 'object' && 'seconds' in data.date) {
          bookingDate = new Timestamp(data.date.seconds, data.date.nanoseconds);
        } else {
          bookingDate = Timestamp.now();
          console.error('Ungültiges Datumsformat für Buchung:', doc.id);
        }
        
        fetchedBookings.push({ 
          id: doc.id,
          ...data,
          date: bookingDate
        } as Booking);
      });

      setBookings(fetchedBookings);
      setError(null);
    } catch (err) {
      console.error('Error fetching bookings:', err);
      setError('Fehler beim Laden der Buchungen');
    } finally {
      setLoading(false);
    }
  };

  const updateBookingStatus = async (bookingId: string, newStatus: BookingStatus) => {
    if (!currentUser) {
      setError('Sie müssen angemeldet sein, um diese Aktion durchzuführen');
      return;
    }

    try {
      setUpdatingBookingId(bookingId);
      const bookingRef = doc(db, 'bookings', bookingId);
      
      await updateDoc(bookingRef, { 
        status: newStatus,
        updatedAt: Timestamp.now(),
        updatedBy: currentUser.email
      });
      
      setBookings(prevBookings =>
        prevBookings.map(booking =>
          booking.id === bookingId
            ? { ...booking, status: newStatus }
            : booking
        )
      );
      
      setError(null);
    } catch (err) {
      console.error('Error updating booking:', err);
      setError('Fehler beim Aktualisieren der Buchung');
    } finally {
      setUpdatingBookingId(null);
    }
  };

  const formatDate = (date: Timestamp) => {
    const d = date.toDate();
    return new Intl.DateTimeFormat('de-DE', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }).format(d);
  };

  if (loading) {
    return (
      <Container>
        <ContentContainer>
          <EmptyState>Lädt...</EmptyState>
        </ContentContainer>
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <ContentContainer>
          <EmptyState>{error}</EmptyState>
        </ContentContainer>
      </Container>
    );
  }

  return (
    <Container>
      <ContentContainer>
        <Title>Admin Dashboard</Title>
        
        {/* Mobile View */}
        {bookings.map(booking => (
          <BookingCard key={booking.id}>
            <BookingInfo>
              <InfoLabel>Datum</InfoLabel>
              <InfoValue>{formatDate(booking.date)}</InfoValue>
              
              <InfoLabel>Kunde</InfoLabel>
              <InfoValue>{booking.customerName}</InfoValue>
              
              <InfoLabel>Service</InfoLabel>
              <InfoValue>{booking.service}</InfoValue>
              
              <InfoLabel>Status</InfoLabel>
              <InfoValue>
                <StatusBadge $status={booking.status}>
                  {booking.status === 'pending' && 'Ausstehend'}
                  {booking.status === 'confirmed' && 'Bestätigt'}
                  {booking.status === 'cancelled' && 'Storniert'}
                </StatusBadge>
              </InfoValue>
            </BookingInfo>
            
            {booking.status === 'pending' && (
              <ButtonGroup>
                <ActionButton
                  $variant="confirm"
                  onClick={() => updateBookingStatus(booking.id, 'confirmed')}
                  disabled={updatingBookingId === booking.id}
                >
                  {updatingBookingId === booking.id && <LoadingSpinner />}
                  Bestätigen
                </ActionButton>
                <ActionButton
                  $variant="cancel"
                  onClick={() => updateBookingStatus(booking.id, 'cancelled')}
                  disabled={updatingBookingId === booking.id}
                >
                  {updatingBookingId === booking.id && <LoadingSpinner />}
                  Ablehnen
                </ActionButton>
              </ButtonGroup>
            )}
          </BookingCard>
        ))}

        {/* Desktop View */}
        <Table>
          <thead>
            <tr>
              <Th>Datum</Th>
              <Th>Kunde</Th>
              <Th>Service</Th>
              <Th>Status</Th>
              <Th>Aktionen</Th>
            </tr>
          </thead>
          <tbody>
            {bookings.map(booking => (
              <tr key={booking.id}>
                <Td>{formatDate(booking.date)}</Td>
                <Td>{booking.customerName}</Td>
                <Td>{booking.service}</Td>
                <Td>
                  <StatusBadge $status={booking.status}>
                    {booking.status === 'pending' && 'Ausstehend'}
                    {booking.status === 'confirmed' && 'Bestätigt'}
                    {booking.status === 'cancelled' && 'Storniert'}
                  </StatusBadge>
                </Td>
                <Td>
                  {booking.status === 'pending' && (
                    <>
                      <ActionButton
                        $variant="confirm"
                        onClick={() => updateBookingStatus(booking.id, 'confirmed')}
                        disabled={updatingBookingId === booking.id}
                      >
                        {updatingBookingId === booking.id && <LoadingSpinner />}
                        Bestätigen
                      </ActionButton>
                      <ActionButton
                        $variant="cancel"
                        onClick={() => updateBookingStatus(booking.id, 'cancelled')}
                        disabled={updatingBookingId === booking.id}
                      >
                        {updatingBookingId === booking.id && <LoadingSpinner />}
                        Ablehnen
                      </ActionButton>
                    </>
                  )}
                </Td>
              </tr>
            ))}
          </tbody>
        </Table>

        {bookings.length === 0 && (
          <EmptyState>Keine Buchungen vorhanden</EmptyState>
        )}
      </ContentContainer>
    </Container>
  );
};

export default AdminDashboard;
