interface TeamCardProps {
  name: string;
  role: string;
  image: string;
  socials: { href: string; icon: React.ReactNode }[];
}

export default function TeamCard({
  name,
  role,
  image,
  socials,
}: TeamCardProps) {
  return (
    <div className="team-card p-6 rounded-lg shadow-lg bg-glass transform transition-transform hover:scale-105 hover:shadow-blue-500/50">
      <div className="relative mb-4">
        <div className="img w-40 h-40 rounded-full overflow-hidden mx-auto">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>
      </div>
      <div className="info text-center">
        <h3 className="text-xl font-bold mb-1">{name}</h3>
        <span className="text-gray-700">{role}</span>
      </div>
      <ul className="social flex justify-center mt-4">
        {socials.map((social, index) => (
          <li key={index} className="mx-2">
            <a
              href={social.href}
              className={
                "text-2xl text-blue-500 transition-transform transform hover:text-blue-700"
              }
            >
              {social.icon}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
