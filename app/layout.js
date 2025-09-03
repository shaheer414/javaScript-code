export const metadata = {
  title: {
  description: 'My Website Title',
  template: '%s | My Website',
  default: 'My Website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        </body>
    </html>
  );
}