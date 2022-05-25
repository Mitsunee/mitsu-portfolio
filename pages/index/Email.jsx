import { useState } from "preact/hooks";

export function Email() {
  const [mail, setMail] = useState(false);
  const reveal = str => {
    setMail(
      str
        .split("")
        .map((c, idx) => String.fromCharCode(c.charCodeAt(0) - (8 - idx)))
        .join("")
    );
  };

  return mail ? (
    <>
      Email at{" "}
      <a
        href={`mailto:${mail}`}
        title="Business Email - Do not send advertisements!">
        {mail}
      </a>
    </>
  ) : (
    <a
      onClick={ev => {
        ev.preventDefault();
        reveal("upzxyqgf@lgqoph^]%Yda");
      }}
      title="Click to reveal (requires javascript)">
      Email
    </a>
  );
}
