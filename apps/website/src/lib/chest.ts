export function formatReward(amount: number, reward: string) {
  return amount === 1 ? reward : `${amount.toLocaleString()} ${reward}`;
}
