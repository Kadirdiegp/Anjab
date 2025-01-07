import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  User,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth';
import { auth, db } from '../firebase/config';
import { doc, getDoc, setDoc } from 'firebase/firestore';

interface AuthContextType {
  currentUser: User | null;
  isAdmin: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, isAdmin?: boolean) => Promise<void>;
  logout: () => Promise<void>;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  const checkAdminStatus = async (user: User) => {
    try {
      // Check if user is admin in the admins collection
      const adminRef = doc(db, 'admins', user.uid);
      const adminDoc = await getDoc(adminRef);
      
      if (user.email === 'anja@haarambiente.de') {
        // If the user is Anja, ensure they are an admin
        if (!adminDoc.exists()) {
          await setDoc(adminRef, {
            email: user.email,
            createdAt: new Date(),
          });
        }
        setIsAdmin(true);
      } else {
        // For other users, check if they exist in the admins collection
        setIsAdmin(adminDoc.exists());
      }
    } catch (error) {
      console.error('Error checking admin status:', error);
      setIsAdmin(false);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setCurrentUser(user);
      if (user) {
        await checkAdminStatus(user);
      } else {
        setIsAdmin(false);
      }
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      await checkAdminStatus(user);
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  };

  const register = async (email: string, password: string, isAdmin = false) => {
    try {
      const { user } = await createUserWithEmailAndPassword(auth, email, password);
      
      if (email === 'anja@haarambiente.de' || isAdmin) {
        // Create admin document
        await setDoc(doc(db, 'admins', user.uid), {
          email,
          createdAt: new Date(),
        });
      }
      
      await checkAdminStatus(user);
    } catch (error) {
      console.error('Registration error:', error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      setCurrentUser(null);
      setIsAdmin(false);
    } catch (error) {
      console.error('Logout error:', error);
      throw error;
    }
  };

  const value = {
    currentUser,
    isAdmin,
    login,
    register,
    logout,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
