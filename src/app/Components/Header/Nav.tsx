import Link from "next/link";

export default function Nav({ setMobileToggle }) {
  return (
    <ul className="cs_nav_list fw-medium">
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="#about">About</Link>
      </li>
      <li>
        <Link href="#services" onClick={() => setMobileToggle(false)}>
          Services
        </Link>
      </li>

      <li>
        <Link href="#project" onClick={() => setMobileToggle(false)}>
          Project
        </Link>
      </li>

      <li>
        <Link href="#process" onClick={() => setMobileToggle(false)}>
          Process
        </Link>
      </li>

      <li>
        <Link href="#faq" onClick={() => setMobileToggle(false)}>
          FAQ
        </Link>
      </li>
    </ul>
  );
}
