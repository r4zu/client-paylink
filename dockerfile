FROM bitnami/node:20 as builder

RUN npm install -g pnpm

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN pnpm install --frozen-lockfile

COPY . .

RUN pnpm build

# ----------------------------------------------

FROM bitnami/node:20 as runner

RUN npm install -g pnpm

WORKDIR /app

COPY . .

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules

ENV NODE_OPTIONS="--dns-result-order=ipv4first"

EXPOSE 3000

CMD [ "pnpm", "dev" ]
 