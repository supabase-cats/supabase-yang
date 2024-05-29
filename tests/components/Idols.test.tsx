import { render, screen, waitFor } from '@testing-library/react';
import Idols from '../../src/components/Idols';

// supabaseClinet를 이용하여 mock. from과 select를 다음과 같이 사용할 수 있다.
vi.mock('/src/supabaseClient.ts', () => ({
  supabase: {
    from: vi.fn().mockReturnThis(),
    select: vi.fn().mockResolvedValue({
      data: [
        {
          id: 1,
          name: 'cat',
          group: '고양이',
          profilePicture: 'x',
          totalVotes: 1,
          gender: 'male',
        },
      ],
    }),
  },
}));

describe('Idosl', () => {
  // idols 컴포넌트가 렌더링 되고 head 렌더링 체크
  it('render idol heading', async () => {
    render(<Idols />);

    await waitFor(() => {
      const heading = screen.getByRole('heading');
      expect(heading).toBeInTheDocument();
      expect(heading).toHaveTextContent(/idols/i);
    });
  });

  // idols 컴포넌트가 fetching 테스트
  it('rendered data from supabase', async () => {
    render(<Idols />);

    await waitFor(() => {
      expect(screen.getByText('cat')).toBeInTheDocument();
    });
  });
});
