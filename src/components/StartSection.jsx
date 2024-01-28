export default function StartSection({ onClickStartBtn }) {
  return (
    <button className="start-btn" onClick={onClickStartBtn}>
      <span>Start Quiz</span>
      <svg
        clipRule="evenodd"
        fillRule="evenodd"
        strokeLinejoin="round"
        strokeMiterlimit="2"
        viewBox="0 0 24 24"
      >
        <path
          d="m2.009 12.002c0-5.517 4.48-9.997 9.998-9.997s9.998 4.48 9.998 9.997c0 5.518-4.48 9.998-9.998 9.998s-9.998-4.48-9.998-9.998zm8.211-4.843c-.141-.108-.3-.157-.456-.157-.389 0-.755.306-.755.749v8.501c0 .445.367.75.755.75.157 0 .316-.05.457-.159 1.554-1.203 4.199-3.252 5.498-4.258.184-.142.29-.36.29-.592 0-.23-.107-.449-.291-.591z"
          fillRule="nonzero"
        />
      </svg>
    </button>
  );
}