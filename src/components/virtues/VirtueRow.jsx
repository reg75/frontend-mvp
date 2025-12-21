export default function VirtueRow({
    virtues = [],
    title = "virtues",
    onSelectVirtue = null,
    layout = "grid" // "grid" | "row"
}) {
    if (!Array.isArray(virtues) || virtues.length === 0) {
        
        return (
            <section className="virtueRow">
                <div className="virtueRow__header">
                    <h2 className="virtueRow__title">{title}</h2>
                </div>
                <p className="virtueRow__empty">No virtues available</p>
            </section>
        );
    }

    const clickable = typeof onSelectVirtue === "function";

return (
    <section className="virtueRow" aria-label={title}>
      <div className="virtueRow__header">
        <h2 className="virtueRow__title">{title}</h2>
      </div>

      <div
        className={`virtueRow__list ${
          layout === "grid" ? "virtueRow__list--grid" : "virtueRow__list--row"
        }`}
        role="list"
      >
        {virtues.map((v) => {
          const key = v.id || v.slug || v.name;

          // Support a couple of likely field names:
          const imageSrc = v.image || v.imageUrl || v.img || null;

          return (
            <article
              key={key}
              className={`virtueCard ${clickable ? "virtueCard--clickable" : ""}`}
              role="listitem"
            >
              <button
                type="button"
                className="virtueCard__button"
                onClick={clickable ? () => onSelectVirtue(v) : undefined}
                disabled={!clickable}
                aria-disabled={!clickable}
              >
                {imageSrc ? (
                  <img
                    className="virtueCard__image"
                    src={imageSrc}
                    alt={v.name ? `${v.name} image` : "Virtue image"}
                    loading="lazy"
                  />
                ) : null}

                <h3 className="virtueCard__name">{v.name}</h3>
                <p className="virtueCard__desc">
                  {v.shortDescription || v.description || "No description yet."}
                </p>
              </button>
            </article>
          );
        })}
      </div>
    </section>
  );
}