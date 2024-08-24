function CameraIcon({className}: {className: string}) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg"
            className={className}
            width={22}
            height={22}
            viewBox='0 0 24 24'>
            <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                <path d="M5 7h1a2 2 0 0 0 2-2a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2" /><path d="M9 13a3 3 0 1 0 6 0a3 3 0 0 0-6 0" />
            </g>
        </svg>
    )
}

export default CameraIcon