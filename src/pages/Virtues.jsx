import { useEffect, useState } from "react";
import AppLayout from "../components/layout/AppLayout";
import VirtueRow from "../components/virtues/VirtueRow";
import { getVirtues } from "../services/virtuesService";
import Loader from "../components/ui/Loader";



export default function Virtues() {
    const [virtues, setVirtues] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        let ignore = false;
    
        async function load() {
            try {
                setIsLoading(true);
                const payload = await getVirtues();
                const items = payload.data ?? payload;
                if (!ignore) setVirtues(items);
            } catch (err) {
                console.error("Failed to load virtues", err);
                if (!ignore) setVirtues([]);   
            } finally {
                    if (!ignore) setIsLoading(false);
                }
            }
             
        load();
        return () => {
            ignore = true;
        };
        }, []);


  return (
    <AppLayout>
      <h1>Virtues</h1>

      {isLoading ? (
        <Loader label="Loading virtues..." size="md" />
      ) : (
        <VirtueRow 
            title="All Virtues"
            virtues={virtues}
            onSelectVirtue={(v) => console.log("Selected virtue: ", v)}
        />
      )}
    </AppLayout>
  );
}