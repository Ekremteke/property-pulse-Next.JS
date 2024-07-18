import "@/assets/styles/globals.css";
export const metadata = {
  title: "PropertyPulse | Find The Perfect Rental",
  description: "Find The Perfect Rental",
  keywords:
    "rental, rent, find rentals, properties, find property, buy, house, flat",
};

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
};

export default MainLayout;
