import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const login = async (email, password) => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setUser({ 
        id: 1, 
        firstName: 'John', 
        lastName: 'Doe', 
        email,
        progress: 65,
        level: 'Intermediate'
      });
      setIsLoading(false);
    }, 1000);
  };

  const signup = async (firstName, lastName, email, password) => {
    setIsLoading(true);
    setTimeout(() => {
      setUser({ 
        id: 1, 
        firstName, 
        lastName, 
        email,
        progress: 0,
        level: 'Beginner'
      });
      setIsLoading(false);
    }, 1000);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};