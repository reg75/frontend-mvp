import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ProtectedLayout from "../components/layout/ProtectedLayout";
import ResourceCard from "../components/resources/ResourceCard";
import Loader from "../components/ui/Loader";

import { getResources } from "../services/resourcesService";

export default function Resources() {
  const { category } = useParams();
  const activeFilter = category || "all";

  const [resources, setResources] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let ignore = false;

    async function load() {
      try {
        setIsLoading(true);

        const payload = await getResources({ category: activeFilter });
        const items = payload.data ?? payload;

        if (!ignore) setResources(items);
      } catch (err) {
        console.error("Failed to load resources", err);
        if (!ignore) setResources([]);
      } finally {
        if (!ignore) setIsLoading(false);
      }
    }

    load();

    return () => {
      ignore = true;
    };
  }, [activeFilter]);

  return (
    <ProtectedLayout>
      <h1>Resources</h1>
      <p>Active filter: {activeFilter}</p>

      {isLoading ? (
        <Loader label="Loading resources..." size="md" />
      ) : resources.length === 0 ? (
        <p>No resources found.</p>
      ) : (
        <div className="resourceList">
          {resources.map((r) => (
            <ResourceCard key={r.id} resource={r} />
          ))}
        </div>
      )}
    </ProtectedLayout>
  );
}
