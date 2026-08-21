import { LayoutGrid, Maximize2, Move } from "lucide-react";

const FEATURES = [
  {
    icon: Move,
    title: "자유로운 드래그 앤 드롭",
    description:
      "위젯의 위치를 마우스 클릭만으로 자유롭게 변경하세요. 변경된 순서는 자동으로 저장됩니다.",
  },
  {
    icon: Maximize2,
    title: "반응형 크기 조절",
    description:
      "컨텐츠의 중요도에 따라 1x1 또는 2x2 사이즈로 위젯 카드의 크기를 확장할 수 있습니다.",
  },
  {
    icon: LayoutGrid,
    title: "독립적인 Multi-Instance",
    description:
      "동일한 타입의 위젯을 여러 개 추가해도 서로 독립된 데이터와 고유한 타이틀을 유지합니다.",
  },
];

export const LandingFeatures = () => {
  return (
    <section className="border-t bg-muted/30 py-20 w-full">
      <div className="max-w-5xl mx-auto px-6 space-y-12">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            DashCraft가 제공하는 핵심 기능
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground">
            생산성을 높이기 위한 유연하고 직관적인 도구들
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FEATURES.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-xl border bg-card space-y-3"
              >
                <div className="p-2.5 bg-primary/10 text-primary w-fit rounded-lg">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-base">{feature.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
