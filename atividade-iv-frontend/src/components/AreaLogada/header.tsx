export function Header() {
    return (
        <header className="w-full h-fit p-4 flex justify-center items-center bg-gradient-to-r from-blue-600 to-blue-900 gap-2">
            <svg  xmlns="http://www.w3.org/2000/svg"  width={32}  height={32}  viewBox="0 0 24 24"  fill="none"  stroke="white"  strokeWidth={2}  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-movie"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" /><path d="M8 4l0 16" /><path d="M16 4l0 16" /><path d="M4 8l4 0" /><path d="M4 16l4 0" /><path d="M4 12l16 0" /><path d="M16 8l4 0" /><path d="M16 16l4 0" /></svg>
            <h1 className="text-3xl font-bold text-white">Lista de Filmes</h1>
        </header>
    )
}