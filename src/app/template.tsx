import { PageTransitionComponent } from '@/components/layout';

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <PageTransitionComponent rootPath='/'>{children}</PageTransitionComponent>
  );
}
