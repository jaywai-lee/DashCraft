import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const LandingHero = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center space-y-6 pt-16 pb-8">
      <h1 className="md:text-6xl text-3xl font-extrabold tracking-tight leading-tight max-w-3xl">
        필요한 위젯만 조합해서
        <br /> <span>나만의 대시보드</span>를 <br className="block sm:hidden" />{" "}
        구성하세요
      </h1>

      <p className="text-muted-foreground text-sm sm:text-base max-w-2xl leading-relaxed">
        자유롭게 위치를 바꾸고,
        <br className="block sm:hidden" /> 위젯의 크기와 이름을 마음대로
        설정하세요. <br /> 복잡한 세팅 없이 바로 시작하는{" "}
        <br className="block sm:hidden" /> 나만의 맞춤형 작업 공간입니다.
      </p>

      <div className="pt-2">
        <Link
          href="/dashboard"
          className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold bg-primary text-primary-foreground rounded-xl shadow-lg hover:shadow-primary/25 hover:opacity-90 transition-all"
        >
          워크스페이스 둘러보기
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};
