import { render, screen } from '@testing-library/react';
import Greet from '../../src/components/Greet';

describe('Greeting', () => {
  it('render hello when name is provided', () => {
    render(<Greet name="cat" />);

    const heading = screen.getByRole('heading');
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(/hello cat/i);
  });

  it("don't render name when name is not provided", () => {
    render(<Greet />);

    const heading = screen.getByRole('heading');
    expect(heading).toBeInTheDocument();
    expect(heading).not.toHaveTextContent(/hello/i);
  });
});
