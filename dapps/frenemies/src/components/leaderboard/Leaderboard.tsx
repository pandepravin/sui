// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

import { config } from "../../config";
import { Stat } from "../Stat";
import { Table } from "./Table";
import { Leaderboard as LeaderboardType, LEADERBOARD } from "../../network/types";
import { useRawObject } from "../../network/queries/use-raw";

/**
 * Table representing a Leaderboard
 */
export function Leaderboard() {
  const { data } = useRawObject<LeaderboardType>(config.VITE_LEADERBOARD, LEADERBOARD);

  // TODO: Loading and error states:
  if (!data) {
    return null;
  }

  return (
    <>
      <div className="flex gap-16 mt-3 mb-7">
        <Stat variant="leaderboard" label="Highest Score">
          --
        </Stat>
        {/* <Stat variant="leaderboard" label="Total Score">
          420
        </Stat> */}
      </div>
      <Table data={data.data} />
    </>
  );
}
