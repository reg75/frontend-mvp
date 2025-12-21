import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";

import ProtectedLayout from "../components/layout/ProtectedLayout";
import ResourceCard from "../components/resources/ResourceCard";
import Loader from "../components/ui/Loader";
import Alert from "../components/ui/Alert";

import { getResources } from "../services/resourcesService";
import { getVirtues } from "../services/virtuesService";

export default function Resources() {
  const { category } = useParams();
  const activeFilter = category || "all";

  const [resources, setResources] = useState([]);
  const [isLoadingResources, setIsLoadingResources] = useState(true);

  const [virtues, setVirtues] = useState([]);
  const [isLoadingVirtues, setIsLoadingVirtues] = useState(true);

  const [selectedVirtueId, setSelectedVirtueId] = useState("all");
  const [error, setError] = useState(null);

  // Load virtues once for dropdown
  useEffect(() => {
    let ignore = false;

    async function loadVirtues() {
      try {
        setIsLoadingVirtues(true);
        const payload = await getVirtues();
        const items = payload.data ?? payload;

        if (!ignore) setVirtues(Array.isArray(items) ? items : []);
      } catch (err) {
        console.error("Failed to load virtues", err);
        if (!ignore) setVirtues([]);
      } finally {
        if (!ignore) setIsLoadingVirtues(false);
      }
    }

    loadVirtues();
    return () => {
      ignore = true;
    };
  }, []);

  // Load resources when category OR selected virtue changes
  useEffect(() => {
    let ignore = false;

    async function loadResources() {
      try {
        setError(null);
        setIsLoadingResources(true);

        const virtueId = selectedVirtueId === "all" ? null : selectedVirtueId;

        const payload = await getResources({
          category: activeFilter,
          virtueId,
        });

        const items = payload.data ?? payload;

        if (!ignore) setResources(Array.isArray(items) ? items : []);
      } catch (err) {
        console.error("Failed to load resources", err);
        if (!ignore) {
          setResources([]);
          setError({
            type: "error",
            title: "Could not load resources",
            message: "Please try again. If the problem continues, check the console.",
          });
        }
      } finally {
        if (!ignore) setIsLoadingResources(false);
      }
    }

    loadResources();
    return () => {
      ignore = true;
    };
  }, [activeFilter, selectedVirtueId]);

  const isLoading = isLoadingResources || isLoadingVirtues;

  const virtueOptions = useMemo(() => {
    // In case you ever want a stable ordering
    return Array.isArray(virtues) ? virtues : [];
  }, [virtues]);

  return (
    <ProtectedLayout title="Resources">
      <section className="resources-toolbar">
        <label className="resources-filter">
          <span className="resources-filter-label">Filter by virtue</span>
          <select
            className="resources-filter-select"
            value={selectedVirtueId}
            onChange={(e) => setSelectedVirtueId(e.target.value)}
            disabled={isLoadingVirtues}
          >
            <option value="all">All virtues</option>
            {virtueOptions.map((v) => (
              <option key={v.id} value={v.id}>
                {v.name}
              </option>
            ))}
          </select>
        </label>
      </section>

      {error ? (
        <Alert type={error.type} title={error.title} message={error.message} />
      ) : null}

      {isLoading ? (
        <Loader />
      ) : resources.length === 0 ? (
        <p className="resources-empty">No resources found for this filter.</p>
      ) : (
        <div className="resources-grid">
          {resources.map((r) => (
            <ResourceCard key={r.id} resource={r} />
          ))}
        </div>
      )}
    </ProtectedLayout>
  );
}
