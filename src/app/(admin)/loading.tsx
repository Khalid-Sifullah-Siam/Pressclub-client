export default function Loading() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-blue-900/20 via-[#0a0f1e] to-[#0a0f1e]" />
      <div className="absolute top-0 left-0 w-150 h-150 bg-blue-600/10 blur-[150px] rounded-full animate-pulse" />
      <div className="absolute bottom-0 right-0 w-150 h-150 bg-purple-600/10 blur-[150px] rounded-full animate-pulse delay-1000" />

      <div className="relative z-10 flex flex-col items-center gap-6">
        <div className="relative">
          <div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
            <div className="animate-spin rounded-full h-10 w-10 border-[3px] border-white/20 border-t-white" />
          </div>
        </div>
        <div className="text-center">
          <h3 className="text-white text-lg font-medium mb-2">Loading Admin Panel</h3>
          <p className="text-white/50 text-sm">Please wait...</p>
        </div>
      </div>
    </div>
  );
}
