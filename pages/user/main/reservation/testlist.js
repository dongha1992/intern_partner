import React, { Fragment } from "react";
import Link from "next/link";

function TestList({ list }) {
	console.log(list);
	return (
		<Fragment>
			<div>
				{list?.map((info) => {
					return (
						<div style={{ margin: "50px", textAlign: "center" }} key={info.id}>
							<Link href={`/user/main/reservation/detail/${info.id}`}>
								<input type="button" value={"button" + info.id} alt="" />
							</Link>
							<div style={{ marginTop: "10px" }} />
							<div>{info.car_brand}</div>
							<div style={{ marginTop: "10px" }} />
							<div>{info.car_type}</div>
						</div>
					);
				})}
			</div>
		</Fragment>
	);
}

export default TestList;
