import Script from "next/script";

export const ResizeScript = () => {
  return (
    <Script
      id="resize-reload"
      strategy="afterInteractive" // Ensure this script runs only on the client side
    >
      {/* {`
          window.addEventListener('resize', () => {
            window.location.reload();
          });
        `} */}
    </Script>
  );
};
