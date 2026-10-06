/*
Rabbithole doesn't hold user deposits: depositors keep their positions in the incentivized
protocols, which already report that TVL. Rabbithole's campaign contracts only hold
sponsor-funded reward budgets that are paid out to depositors over time, so TVL is zero.
This adapter exists to list Rabbithole for the Yields dashboard.
*/

async function tvl() {
  return {}
}

module.exports = {
  methodology:
    "Rabbithole runs time-based incentive campaigns that reward depositors in other protocols. Users never deposit with Rabbithole, so it has no TVL; the incentivized deposits are counted by the underlying protocols. See the Yields dashboard for Rabbithole reward pools.",
  ethereum: { tvl },
  base: { tvl },
  arbitrum: { tvl },
  optimism: { tvl },
  polygon: { tvl },
  wc: { tvl },
  robinhood: { tvl },
}
