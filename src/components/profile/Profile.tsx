import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { collection, query, where, getDocs, Timestamp } from 'firebase/firestore';
import { db } from '../../firebase/config';
import { useAuth } from '../../context/AuthContext';
import { Booking } from '../../types/booking';

const Container = styled.div`
  min-height: 100vh;
  padding: 6rem 2rem 2rem;
  background: ${props => props.theme.colors.background};
`;

const ContentContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-family: ${props => props.theme.fonts.heading};
  font-size: 2rem;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 2rem;
`;

const Section = styled.section`
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h2`
  font-family: ${props => props.theme.fonts.heading};
  font-size: 1.5rem;
  color: ${props => props.theme.colors.text};
  margin-bottom: 1rem;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
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

const StatusBadge = styled.span<{ $status: 'pending' | 'confirmed' | 'cancelled' }>`
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

const EmptyState = styled.div`
  text-align: center;
  padding: 2rem;
  color: ${props => props.theme.colors.text};
`;

const UserInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
  padding: 1rem;
  background: ${props => props.theme.colors.background};
  border-radius: 8px;
`;

const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const InfoLabel = styled.span`
  font-weight: 500;
  color: ${props => props.theme.colors.text};
`;

const InfoValue = styled.span`
  color: ${props => props.theme.colors.primary};
`;

const Profile: React.FC = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const { currentUser } = useAuth();

  useEffect(() => {
    const fetchBookings = async () => {
      if (!currentUser) return;

      try {
        const bookingsRef = collection(db, 'bookings');
        const q = query(
          bookingsRef,
          where('customerEmail', '==', currentUser.email)
        );
        const querySnapshot = await getDocs(q);
        
        const fetchedBookings: Booking[] = [];
        querySnapshot.forEach((doc) => {
          fetchedBookings.push({ id: doc.id, ...doc.data() } as Booking);
        });

        // Sort bookings by date
        setBookings(fetchedBookings.sort((a, b) => b.date.seconds - a.date.seconds));
      } catch (error) {
        console.error('Error fetching bookings:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, [currentUser]);

  const formatDate = (date: Timestamp) => {
    return new Date(date.seconds * 1000).toLocaleDateString('de-DE', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (!currentUser) {
    return (
      <Container>
        <ContentContainer>
          <EmptyState>Bitte melden Sie sich an, um Ihr Profil zu sehen.</EmptyState>
        </ContentContainer>
      </Container>
    );
  }

  return (
    <Container>
      <ContentContainer>
        <Title>Mein Profil</Title>

        <Section>
          <UserInfo>
            <InfoItem>
              <InfoLabel>E-Mail</InfoLabel>
              <InfoValue>{currentUser.email}</InfoValue>
            </InfoItem>
            <InfoItem>
              <InfoLabel>Mitglied seit</InfoLabel>
              <InfoValue>
                {new Date(currentUser.metadata.creationTime!).toLocaleDateString('de-DE')}
              </InfoValue>
            </InfoItem>
          </UserInfo>
        </Section>

        <Section>
          <SectionTitle>Meine Buchungen</SectionTitle>
          {loading ? (
            <EmptyState>Laden...</EmptyState>
          ) : bookings.length > 0 ? (
            <Table>
              <thead>
                <tr>
                  <Th>Datum</Th>
                  <Th>Service</Th>
                  <Th>Status</Th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((booking) => (
                  <tr key={booking.id}>
                    <Td>{formatDate(booking.date)}</Td>
                    <Td>{booking.service}</Td>
                    <Td>
                      <StatusBadge $status={booking.status || 'pending'}>
                        {booking.status === 'confirmed' ? 'Bestätigt' :
                         booking.status === 'cancelled' ? 'Storniert' : 'Ausstehend'}
                      </StatusBadge>
                    </Td>
                  </tr>
                ))}
              </tbody>
            </Table>
          ) : (
            <EmptyState>Sie haben noch keine Buchungen.</EmptyState>
          )}
        </Section>
      </ContentContainer>
    </Container>
  );
};

export default Profile;
