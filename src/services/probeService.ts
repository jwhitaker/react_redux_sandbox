import { Observable } from "rxjs/Observable";
import { Subscriber } from "rxjs/Subscriber";
import { Probe, ProbeList } from "../model/probe";

export class ProbeService {
	loadProbes(): Observable<ProbeList> {
		return Observable.create((observer: Subscriber<ProbeList>) => {
			let probes = [
				{ id: "1", name: "Meat #1", value: 34.2 },
				{ id: "2", name: "Meat #2", value: 32.2 },
				{ id: "3", name: "Ambient", value: 22 }
			];

			setTimeout(() => {
				observer.next(probes);
			}, 2000);
		});
	}
}