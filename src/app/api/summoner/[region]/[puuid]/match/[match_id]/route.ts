import { NextRequest, NextResponse } from "next/server";
import { matchById } from "@/utils/api";
import { REGIONS } from "@/types";
import { formatMatch } from "@/utils/helpers";

// this route stores formatted match data

export async function GET(
	req: NextRequest,
	{
		params,
	}: {
		params: {
			region: REGIONS;
			puuid: string;
			match_id: string;
		};
	}
) {
	// Await the parameters before using them
	const { region, match_id } = params;
	const match = await matchById(match_id, region);
	const formattedMatch = formatMatch(match);
	return NextResponse.json(formattedMatch);
}
