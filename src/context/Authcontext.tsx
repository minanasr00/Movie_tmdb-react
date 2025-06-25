import { createContext, useEffect, useState } from 'react'
import { type User, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../services/firebase/config';

export const AuthContext = createContext<{ user: User | null }>({ user: null })

export default function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null)
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user)
        })
        return unsubscribe
    },[])
    return (
      
      <AuthContext.Provider value={{ user }} >
            {children}
    </AuthContext.Provider>
  )
}

