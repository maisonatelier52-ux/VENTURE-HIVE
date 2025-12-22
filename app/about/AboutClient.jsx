export default function AboutClient() {
  return (
    <div className="min-h-screen bg-zinc-50 px-5 md:px-20 py-12 font-serif">
      <div className="max-w-4xl mx-auto space-y-8">

        {/* H1 aligned with URL slug */}
        <h1 className="text-4xl font-semibold text-center">
          About Us
        </h1>

        {/* Brand + keyword reinforcement (visible, SEO-safe) */}
        <p className="text-sm text-gray-600 text-center mt-2">
          Independent journalism by VENTURE HIVE
        </p>

        {/* H2 #1 */}
        <h2 className="text-2xl font-semibold mt-8">
          Independent Journalism with Integrity
        </h2>

        <p className="text-gray-700 leading-relaxed">
          VENTURE HIVE is an independent digital newspaper dedicated to
          delivering accurate, thoughtful, and engaging journalism across
          politics, business, sports, investigations, and opinion.
        </p>

        {/* H2 #2 */}
        <h2 className="text-2xl font-semibold mt-8">
          Our Mission and Editorial Values
        </h2>

        <p className="text-gray-700 leading-relaxed">
          Our mission is to inform readers with clarity and integrity while
          highlighting stories that shape society. We believe journalism
          should be accessible, transparent, and rooted in facts.
        </p>

        {/* H2 #3 */}
        <h2 className="text-2xl font-semibold mt-8">
          Our Contributors and Reporting Approach
        </h2>

        <p className="text-gray-700 leading-relaxed">
          Our contributors come from diverse backgrounds, bringing expertise
          and perspective to every article. From breaking news to in-depth
          analysis, VENTURE HIVE is committed to meaningful storytelling.
        </p>

        <hr />

        <p className="text-sm text-gray-500 text-center">
          Founded in 2025 · Independent Journalism
        </p>

      </div>
    </div>
  );
}
