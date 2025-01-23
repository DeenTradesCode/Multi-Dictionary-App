export default function Footer() {
  return (
	<footer className="bg-stone-300 p-4">
	  <div className="container mx-auto text-center text-stone-700">
		<div className="flex flex-wrap justify-center gap-4">
		  <a
			href="#"
			className="p-4 font-bold text-lg underline hover:text-indigo-600 transition duration-200"
		  >
			Dante
		  </a>
		  <a
			href="#"
			className="p-4 font-bold text-lg underline hover:text-indigo-600 transition duration-200"
		  >
			Saif
		  </a>
		  <a
			href="#"
			className="p-4 font-bold text-lg underline hover:text-indigo-600 transition duration-200"
		  >
			Justin
		  </a>
		</div>
	  </div>
	</footer>
  );
}