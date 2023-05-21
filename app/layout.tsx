export const metadata = {
  title: "head tag with meta tag",
  description:
    "This page lets you see the head tag in the root layout contains a meta tag",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head id="head">
        <meta name="foo" content="bar" />
      </head>
      <body>{children}</body>
    </html>
  );
}
