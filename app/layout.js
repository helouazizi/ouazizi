
import "../styles/globals.css" ;

export const metadata = {
  title: "Ouazizi",
  description: "Ouazizi a full-satck developper",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
