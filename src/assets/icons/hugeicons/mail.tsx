const Mail = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        color={"currentColor"}
        fill={"none"}
        {...props}
    >
        <path
            d="M2 6.5L10.1649 12.7154C11.2833 13.5652 12.7167 13.5652 13.8351 12.7154L22 6.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        ></path>
        <rect
            x="2"
            y="4"
            width="20"
            height="16"
            rx="3"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        ></rect>
    </svg>
);

export default Mail;
