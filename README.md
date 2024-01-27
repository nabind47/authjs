# [Auth.js](https://authjs.dev/)

- 🔐 Next-auth v5 (Auth.js)
- 🚀 Next.js 14 with server actions
- 🔑 Credentials Provider
- 🌐 OAuth Provider (Social login with Google & GitHub)
- 🔒 Forgot password functionality
- ✉️ Email verification
- 📱 Two factor verification
- 👥 User roles (Admin & User)
- 🔓 Login component (Opens in redirect or modal)
- 📝 Register component
- 🤔 Forgot password component
- ✅ Verification component
- ⚠️ Error component
- 🔘 Login button
- 🚪 Logout button
- 🚧 Role Gate
- 🔍 Exploring next.js middleware
- 📈 Extending & Exploring next-auth session
- 🔄 Exploring next-auth callbacks
- 👤 useCurrentUser hook
- 🛂 useRole hook
- 🧑 currentUser utility
- 👮 currentRole utility
- 🖥️ Example with server component
- 💻 Example with client component
- 👑 Render content for admins using RoleGate component
- 🛡️ Protect API Routes for admins only
- 🔐 Protect Server Actions for admins only
- 📧 Change email with new verification in Settings page
- 🔑 Change password with old password confirmation in Settings page
- 🔔 Enable/disable two-factor auth in Settings page
- 🔄 Change user role in Settings page (for development purposes only)

> [Edge compatibility](https://authjs.dev/guides/upgrade-to-v5?authentication-method=middleware)
> while `NextAuth.js` strictly uses standard Web APIs (and thus can run in any environments that supports that), some `libraries/ORM` packages that you rely on might not be ready yet. In this case, you can split the auth configuration into multiple files.

> [Upgrading V5](https://authjs.dev/guides/upgrade-to-v5?authentication-method=middleware#new-features)

## [Callbacks](https://authjs.dev/guides/basics/callbacks#:~:text=Callbacks%201%20Sign%20in%20callback%20Use%20the%20signIn,3%20JWT%20callback%20...%204%20Session%20callback%20)

Callbacks are asynchronous functions you can use to control what happens when an action is performed. Callbacks are extremely powerful, especially in scenarios involving JSON Web Tokens as they allow you to implement access controls without a database and to integrate with external databases or APIs.

```ts
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      return true
    },
    async redirect({ url, baseUrl }) {
      return baseUrl
    },
    async session({ session, user, token }) {
      return session
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      return token
    }
  }
```

> If you want to pass data such as an Access Token or User ID to the browser when using JSON Web Tokens, you can persist the data in the token when the jwt callback is called, then pass the data through to the browser in the session callback
