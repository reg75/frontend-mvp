export default function ResourceCard({ resource }) {
  if (!resource) return null;

  const title = resource.title || "Untitled resource";
  const categoryName = resource.category?.name || resource.category?.slug || "Uncategorised";
  const description = resource.description || "No description yet.";
  const fileType = resource.fileType || resource.file?.type || "file";
  const downloadUrl = resource.downloadUrl || resource.file?.downloadUrl;

  return (
    <article className="resourceCard">
      <div className="resourceCard__body">
        <h3 className="resourceCard__title">{title}</h3>

        <div className="resourceCard__meta">
          <span className="resourcePill">{categoryName}</span>
          <span className="resourcePill resourcePill--muted">
            {fileType.toUpperCase()}
          </span>
        </div>

        <p className="resourceCard__desc">{description}</p>
      </div>

      <div className="resourceCard__actions">
        {downloadUrl ? (
          <a className="resourceCard__downloadBtn" href={downloadUrl}>
            Download
          </a>
        ) : (
          <span className="resourceCard__noFile">Download unavailable</span>
        )}
      </div>
    </article>
  );
}
