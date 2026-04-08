import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4 sm:px-6 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-primary/5 rounded-full blur-[120px] -mr-32 sm:-mr-64 -mt-32 sm:-mt-64"></div>
      <div className="absolute bottom-0 left-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-secondary/5 rounded-full blur-[120px] -ml-32 sm:-ml-64 -mb-32 sm:-mb-64"></div>

      <div className="w-full max-w-sm sm:max-w-md z-10">
        <Link href="/" className="text-3xl sm:text-4xl font-black italic text-primary tracking-tighter uppercase font-headline block text-center mb-10 sm:mb-12">
          JK GYM
        </Link>

        <div className="bg-surface-container rounded-2xl p-6 sm:p-10 border border-outline-variant/10 shadow-2xl">
          <div className="mb-8 sm:mb-10 text-center">
            <h1 className="text-2xl sm:text-3xl font-black italic uppercase tracking-tighter mb-2">Member Login</h1>
            <p className="text-on-surface-variant text-xs font-black uppercase tracking-widest">Enter the Kinetic Zone</p>
          </div>

          <form className="space-y-5 sm:space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant ml-1">Email Identifier</label>
              <input
                type="email"
                placeholder="architect@kinetic.com"
                className="w-full bg-surface-container-high border-none rounded-lg px-5 sm:px-6 py-4 focus:ring-1 focus:ring-primary text-foreground placeholder:text-on-surface-variant/30 font-medium transition-all"
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center px-1">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant">Secure Token</label>
                <Link href="#" className="text-[10px] font-black uppercase tracking-widest text-primary hover:underline">Forgot Access?</Link>
              </div>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full bg-surface-container-high border-none rounded-lg px-5 sm:px-6 py-4 focus:ring-1 focus:ring-primary text-foreground placeholder:text-on-surface-variant/30 font-medium transition-all"
              />
            </div>

            <Link
              href="/member"
              className="w-full bg-foreground text-background py-4 sm:py-5 rounded-lg font-black text-base sm:text-lg uppercase tracking-tighter hover:bg-primary hover:text-primary-foreground transition-all flex items-center justify-center mt-6 sm:mt-8 active:scale-[0.98]"
            >
              Initialize Session
            </Link>
          </form>

          <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-outline-variant/10 text-center">
            <p className="text-on-surface-variant text-xs font-bold uppercase tracking-widest mb-4">New Athlete?</p>
            <Link
              href="/register"
              className="text-primary font-black uppercase tracking-tighter text-base sm:text-lg hover:italic transition-all"
            >
              CREATE REVOLUTIONARY ACCOUNT
            </Link>
          </div>
        </div>

        <p className="mt-10 sm:mt-12 text-center text-[10px] font-black text-on-surface-variant uppercase tracking-widest opacity-50">
          SECURE PROTOCOL ACTIVE | ENCRYPTED LINK
        </p>
      </div>
    </div>
  );
}
