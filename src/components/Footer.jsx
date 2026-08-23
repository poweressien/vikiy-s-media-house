import { brand } from '../data/content'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-navy-950/10 py-8 dark:border-ivory-50/10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row sm:px-10">
        <div className="flex items-center gap-3">
          <img src="assets/logo-icon-navy.png" alt="" className="h-5 w-5 dark:hidden" />
          <img src="assets/logo-icon.png" alt="" className="hidden h-5 w-5 dark:block" />
          <span className="text-[11px] uppercase tracking-[0.12em] text-navy-950/50 dark:text-ivory-50/50">
            &copy; {year} {brand.name}
          </span>
        </div>
        <p className="text-[11px] uppercase tracking-[0.12em] text-navy-950/40 dark:text-ivory-50/40">All rights reserved</p>
      </div>
    </footer>
  )
}
