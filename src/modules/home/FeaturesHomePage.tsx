import React from "react";
import styled from "styled-components";

const Section = styled.section`
  padding: 5rem 0;
  background-color: #f9fafb;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;

  @media (min-width: 640px) {
    padding: 0 1.5rem;
  }

  @media (min-width: 1024px) {
    padding: 0 2rem;
  }
`;

const HeaderSection = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const MainTitle = styled.h2`
  font-size: 1.875rem;
  font-weight: bold;
  color: #1f2937;
  margin-bottom: 1rem;
`;

const GridContainer = styled.div`
  display: grid;
  gap: 1rem;
  justify-items: center;
  max-width: 1000px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const FeatureCard = styled.div`
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px 5px rgba(0, 0, 0, 0.05);
  padding: 1.5rem;
  transition: box-shadow 0.2s ease-in-out;
  max-width: 330px;
`;

const FeatureIcon = styled.div`
  font-size: 1.875rem;
  margin-bottom: 1rem;
`;

const FeatureTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.75rem;
`;

const FeatureDescription = styled.p`
  color: #4b5563;
`;

const FeaturesHomePage = () => {
  return (
    <Section>
      <Container>
        <HeaderSection>
          <MainTitle>Mọi thứ bạn cần cho quản lý lab</MainTitle>
        </HeaderSection>

        <GridContainer>
          {[
            {
              icon: "🧪",
              title: "Quản lý xét nghiệm",
              desc: "Theo dõi và quản lý toàn bộ vòng đời mẫu bệnh phẩm",
            },
            {
              icon: "📊",
              title: "Phân tích thông minh",
              desc: "Sử dụng AI để phân tích và đưa ra kết quả chính xác",
            },
            {
              icon: "👥",
              title: "Cộng đồng chuyên gia",
              desc: "Kết nối với các chuyên gia trong lĩnh vực y tế",
            },
            {
              icon: "🛡️",
              title: "Bảo mật tối đa",
              desc: "Đảm bảo an toàn thông tin bệnh nhân và kết quả xét nghiệm",
            },
            {
              icon: "⚡",
              title: "Giám sát real-time",
              desc: "Theo dõi trạng thái thiết bị và quy trình xét nghiệm",
            },
            {
              icon: "🏆",
              title: "Chứng nhận chất lượng",
              desc: "Tuân thủ các tiêu chuẩn quốc tế về chất lượng",
            },
          ].map((feature, index) => (
            <FeatureCard key={index}>
              <FeatureIcon>{feature.icon}</FeatureIcon>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.desc}</FeatureDescription>
            </FeatureCard>
          ))}
        </GridContainer>
      </Container>
    </Section>
  );
};

export default FeaturesHomePage;
