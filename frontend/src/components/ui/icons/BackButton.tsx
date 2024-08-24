function BackButton({className}:{className: string}) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            width={18}
            height={18}
            viewBox="0 0 24 24">
            <path fill="currentColor" d="M10 22L0 12L10 2l1.775 1.775L3.55 12l8.225 8.225z" />
        </svg>
    )
}

export default BackButton