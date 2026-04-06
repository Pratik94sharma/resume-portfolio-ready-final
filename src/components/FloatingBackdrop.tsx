import { motion } from "framer-motion";

const blobs = [
  { className: "bg-amber-200/70 top-[-8%] left-[-8%] h-64 w-64", delay: 0 },
  { className: "bg-teal-200/70 top-[14%] right-[-6%] h-52 w-52", delay: 0.3 },
  { className: "bg-cyan-200/60 bottom-[10%] left-[6%] h-72 w-72", delay: 0.6 },
  { className: "bg-sky-200/60 bottom-[-8%] right-[10%] h-60 w-60", delay: 0.9 }
];

export function FloatingBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_rgba(255,255,255,0.95),_rgba(234,245,255,0.9)_44%,_rgba(224,241,241,0.95)_100%)]" />
      {blobs.map((blob) => (
        <motion.span
          key={blob.className}
          className={`absolute rounded-full blur-3xl ${blob.className}`}
          animate={{ y: [0, -20, 0], x: [0, 16, 0] }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: blob.delay
          }}
        />
      ))}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.2)_0%,rgba(246,253,255,0.65)_70%,rgba(244,250,252,0.88)_100%)]" />
    </div>
  );
}
