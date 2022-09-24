import { createContext, useState } from 'react'
import { authAPI } from '../api/auth'
import auth from '@react-native-firebase/auth'
import { Alert } from 'react-native'
import { displayError } from '~/helpers/alert'

/**
 * Store responsible for the authentication
 * @returns
 */
export function useAuthStore() {
  // User authentication
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(false)

  /**
   * Initializes the store. Tries to get the current user if there is a saved token.
   */
  async function init() {
    setLoading(true)

    try {
      const response = await authAPI.getCurrentUser()

      setUser(response.user)
    } catch (error) {
      console.error(error)
    }

    setLoading(false)
  }

  /**
   * Sign in using username and password.
   * @param username
   * @param password
   * @returns whether it was possible to sign in or not.
   */
  async function signIn(username: string, password: string): Promise<boolean> {
    setLoading(true)

    try {
      const response = await authAPI.signIn(username, password)

      setUser(response.user)

      return true
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }

    return false
  }

  /**
   * Logs out the current user
   */
  async function signOut() {
    setUser(null)
  }

  // Sign up
  async function signUp(t: (key: string) => string, value: string) {
    displayError(t, 'mon erreur')
    // try {
    //   if (value.email && value.password) {
    //     auth()
    //       .createUserWithEmailAndPassword(value.email, value.password)
    //       .then(async (userCred) => {
    //         let objRef = { batch: firebase.firestore().batch(), errors: '' }
    //         updateUserDetails(value.name, null, value.email, getVersion(), true, objRef)
    //         // Commit batch
    //         return objRef.batch.commit().catch((e) => {
    //           alert(e)
    //           // Rollback user
    //           userCred.user.delete()
    //         })
    //       })
    //       .catch((e) => {
    //         alert(e)
    //         // Rollback user if error came inside the "then" clause and not due to the createUserWithEmailAndPassword
    //         getCurrentUser()?.delete()
    //       })
    //   }
    // } catch (e) {
    //   if (e.message) {
    //     // eslint-disable-next-line no-alert
    //     Alert.alert()
    //   }
    // }
    return null
  }

  /**
   * TRIGGERS THE AUTH PROCESS
   */
  // useEffect(() => {
  //   init()
  // }, [])

  // TEMP
  const fakeLogin = () => {
    setUser(true)
  }

  return {
    user,
    loading,
    signUp,
    signIn,
    signOut,
    fakeLogin,
  }
}

export type AuthStore = ReturnType<typeof useAuthStore>

export const AuthStoreContext = createContext<AuthStore>(null as any)
