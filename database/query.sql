CREATE TABLE users (
    user_id BIGSERIAL PRIMARY KEY,

    username VARCHAR(50) NOT NULL UNIQUE,

    password_hash TEXT NOT NULL,

    is_active BOOLEAN NOT NULL DEFAULT TRUE,

    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX idx_users_username_active
ON users (username)
WHERE is_active = TRUE;
SELECT * FROM users WHERE username = ? AND is_active = TRUE;
INSERT INTO users (username, password_hash)
VALUES (
    'manideep',
    '$2y$10$abc123hashedpasswordexample'
);
SELECT user_id, password_hash
FROM users
WHERE username = $1
  AND is_active = TRUE;
CREATE TABLE login_audit (
    audit_id BIGSERIAL PRIMARY KEY,

    user_id BIGINT REFERENCES users(user_id),

    login_time TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,

    login_status VARCHAR(10) CHECK (login_status IN ('SUCCESS', 'FAILED')),

    ip_address INET
);