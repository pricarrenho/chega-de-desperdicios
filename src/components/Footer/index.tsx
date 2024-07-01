export function Footer() {
  const hoverLink =
    "hover:text-lime-400 transition duration-150 hover:ease-in p-1";

  return (
    <footer className="bg-lime-800">
      <div className="container mx-auto py-5">
        <p className="text-center text-sm text-gray-50">
          DESENVOLVIDO COM 💜 POR{" "}
          <a
            href="https://www.pricarrenho.com.br/"
            className={hoverLink}
            target="_blank"
          >
            PRISCILLA CARRENHO
          </a>
        </p>
      </div>
    </footer>
  );
}
