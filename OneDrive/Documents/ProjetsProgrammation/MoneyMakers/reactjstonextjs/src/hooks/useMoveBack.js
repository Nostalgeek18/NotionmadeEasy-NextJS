import { useRouter } from 'next/router';

export function useMoveBack() {
  const router = useRouter();
  return () => router.back();
}
