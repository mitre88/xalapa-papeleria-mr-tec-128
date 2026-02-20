import './globals.css';

export const metadata = {
  title: 'Papelería MR Tec. 128',
  description: 'Sitio informativo de Papelería MR Tec. 128 en Xalapa.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
