import { useState } from "react"

// Sign Component handles SignInWithGoogle and SignOut
export const SignIn = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

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
    <button>Sign In With Google</button>
    <button>Logout</button>
  </main>
);

}