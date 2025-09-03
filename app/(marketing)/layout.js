export default function RootLayout({ children }) {
  return (
    <>
    <header style={{background :'blue',color : 'white'}} >Header(marketing)</header>
      <body>{children}</body>
    <footer style={{background :'black', color : 'white'}}>Footer(marketing)</footer>
  </>)
}