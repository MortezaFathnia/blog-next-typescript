export default function LightTheme() {
  return (
    <style jsx global>{`
      :root {
        --bg: #fff;
        --bg-secondary: #f9fafb;
        --header: var(--pink);
        --textNormal: #222;
        --textTitle: #222;
        --textLink: #d23669;
        --hr: rgba(0, 0, 0, 0.2);
        --inlineCode-bg: rgba(255, 229, 100, 0.2);
        --inlineCode-text: #1a1a1a;
        --form-shadow: 0 2px 15px 0 rgba(210, 214, 220, 0.5);
      }
    `}</style>
  );
}
