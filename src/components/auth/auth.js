import { auth, googleProvider } from "../../firebase-config/firebase"
import { signInWithPopup, signOut } from "firebase/auth"
import { useState } from "react"

// Sign Component handles SignInWithGoogle and SignOut
export const SignIn = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const signInWithGoogle = async () => {
        try {
            await signInWithPopup(auth, googleProvider)
        } catch (err) {
            console.log(err)
    }
}
    const logout = async () => {
        try {
            await signOut(auth);
        }   catch (err) {
            console.log(err)
        }
    }

return (
  <main>
    <form>
      <fieldset>
        <input
          placeholder="Email"
          value={email}
          onChange={(evt) => {
            let copyOfEmail = { ...email };
            copyOfEmail = evt.target.value;
            setEmail(copyOfEmail);
          }}
        ></input>
      </fieldset>
      <fieldset>
        <input
          placeholder="Password"
          value={email}
          onChange={(evt) => {
            let copyOfPassword = { ...password };
            copyOfPassword = evt.target.value;
            setEmail(copyOfPassword);
          }}
        ></input>
      </fieldset>
    </form>
    <button onClick={signInWithGoogle}>Sign In With Google</button>
    <button onClick={logout}>Logout</button>
  </main>
);

}