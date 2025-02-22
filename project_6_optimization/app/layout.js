import Header from "@/components/header";
import "./globals.css";

export const metadata = {
  title: "NextPosts",
  description: "Browse and share amazing posts.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}

// Local Image :-
//----------------
{
  /* <Image
  src={logo}
  alt="Mobile phone with posts feed on it"
  // sizes="10vw"
  width={100}
  height={100}
  priority
/>; */
}

// ------------------------------------------------
// ------------------------------------------------
// ------------------------------------------------

// External Image :-
//-------------------

// const imageLoader = (config) => {
//   return config.src;
// };

{
  /* <Image
  loader={imageLoader}
  src={post.image}
  alt={post.title}
  fill
  quality={100}
/>; */
}
