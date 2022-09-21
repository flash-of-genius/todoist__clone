export const Header = () => {
  return (
    <header className="header" data-testid="header">
      <nav>
        <div className="logo">
          <img src="/images/logo.png" alt="Todoist" />
        </div>
        <div className="setting">
          <ul>
            <li>+</li>
            <li>Pizza Slice</li>
          </ul>
        </div>
      </nav>
    </header>
  );
};